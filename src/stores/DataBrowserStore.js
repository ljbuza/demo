import _ from "lodash";
import { observable, computed, action, autorun } from "mobx";
import tableData from "../data/databrowserData.json";
// import tableData2 from "../data/databrowserTreeData.json";
import tableData2 from "../data/databrowserTreeData2.json";
import { toJS } from "mobx";

export class DataBrowserStore {
  transportLayer;
  direction = null;
  sortColumn = null;
  // @observable section = null;
  @observable rawdata = [];
  @observable data = [];
  @observable filters = [];
  @observable isLoading = true;

  constructor(transportLayer) {
    // this.authorStore = authorStore; // Store that can resolve authors for us
    this.transportLayer = transportLayer; // Thing that can make server requests for us
    // this.transportLayer.onReceiveTodoUpdate(updatedTodo =>
    //   this.updateTodoFromServer(updatedTodo)
    // );
    this.loadtableData();
    this.rawdata = Object.assign({}, this.data);
  }

  @action sort(clickedColumn) {
    if (this.sortColumn !== clickedColumn) {
      this.sortColumn = clickedColumn;
      this.direction = "ascending";
      // this.data = _.sortBy(this.data, [clickedColumn], ["asc"]);
      this.data = _.sortBy(this.data, [clickedColumn]);
    } else {
      this.data = this.data.reverse();
      this.direction = this.direction === "ascending"
        ? "decending"
        : "ascending";
    }
  }

  @action addFilter = (evt, { name, value }) => {
    this.loadtableData();
    console.log("adding filter", name);
    const section = name.substring(0, name.indexOf("-"));
    this.filters[name] = value;
    // this.filteredData(section);
  };

  @computed get usedColumns() {
    return Object.keys(this.filteredData["cmts"][0]);
    // return Object.keys(this.filteredData['networkCmts'][0]);
  }

  @computed get sections() {
    return Object.keys(this.filteredData);
  }

  // @computed get options() {
  //   let fieldOptions = {};
  //   const sections = Object.keys(this.filteredData);
  //   for (let section of sections) {
  //     fieldOptions[section] = {};
  //     let fieldNames = Object.keys(this.filteredData[section][0]);
  //     for (let field of fieldNames) {
  //       fieldOptions[section][field] = [];
  //     }
  //   }
  //   for (let section of sections) {
  //     this.filteredData[section].map(row => {
  //       for (let field in row) {
  //         fieldOptions[section][field].push({
  //           key: row[field].toLowerCase(),
  //           text: row[field],
  //           value: row[field].toLowerCase()
  //         });
  //       }
  //     });
  //   }
  //   return fieldOptions;
  // }

  // @computed get filteredData() {
  //  return computed(() => someExpr).get()

  @computed get options() {
    let fieldOptions = {};
    //   networkCmts: { Name: "" },
    //   networkMac: { Name: "" },
    //   networkFiber: { Name: "" },
    //   networkModem: { Name: "" }
    // };
    const sections = Object.keys(this.data);
    // for (let section of sections) {
    //   fieldOptions[section] = {};
    //   let fieldNames = Object.keys(this.filteredData[section][0]);
    //   for (let field of fieldNames) {
    //     fieldOptions[section][field] = [];
    //   }
    // }
    for (let section of sections) {
      fieldOptions[section] = {};
      let fieldNames = Object.keys(this.data[section][0]);
      for (let field of fieldNames) {
        fieldOptions[section][field] = [];
      }

      this.data[section].map(row => {
        for (let field of Object.keys(row)) {
          if (field !== "parents") {
            let value = String(row[field]);
            let foo = toJS(row);
            fieldOptions[section][field].push({
              key: value.toLowerCase(),
              text: value,
              value: value.toLowerCase()
            });
          }
        }
      });
    }
    return fieldOptions;
  }

  @computed get filteredData() {
    console.log("filtering data...");
    // return computed(() => (this.data)).get();
    // // return this.data;
    let fdata = { ...this.data };
    fdata = JSON.parse(JSON.stringify(fdata));
    const sections = Object.keys(fdata);

    if (Object.keys(this.filters).length === 0) {
      return fdata;
    }

    sections.map((section, index) => {
      let pulls = [];
      // console.log(section);
      if (fdata[section].length > 0) {
        const usedColumns = Object.keys(fdata[section][0]);
        usedColumns.forEach(usedCol => {
          const colname = usedCol;
          if (this.filters[`${section}-${colname}`]) {
            let colfilters = this.filters[`${section}-${colname}`];
            if (colfilters.length > 0) {
              fdata[section].forEach(row => {
                if (!colfilters.includes(row[colname].toLowerCase())) {
                  if (fdata[section].indexOf(row) > -1) {
                    pulls.push(fdata[section].indexOf(row));
                  }
                }
              });
            }
          }
        });
        _.pullAt(fdata[section], pulls);
      }
    });

    sections.map((section, sindex) => {
      let pulls = [];
      fdata[section].map((row, rindex) => {
        if (row.parents) {
          row.parents.map((parentKey, index) => {
            let parentSection = parentKey.substring(0, parentKey.indexOf("-"));
            let parentValue = parentKey.substring(parentKey.indexOf("-") + 1);
            let parentNames = [];
            try {
              fdata[parentSection].map(row => {
                parentNames.push(row.name);
              });
              if (!parentNames.includes(parentValue)) {
                pulls.push(fdata[section].indexOf(row));
              }
            } catch (e) {
              console.log("oops", e);
            }
            // try {
            //   if (
            //     this.filters[`${parentSection}-name`] &&
            //     !this.filters[`${parentSection}-name`].includes(parentValue)
            //   ) {
            //     console.log("found parent filter for", parentValue);
            //     pulls.push(fdata[section].indexOf(row));
            //   }
            // } catch (e) {
            //   console.log("oops", e);
            // }
          });
        }
      });
      _.pullAt(fdata[section], pulls);
    });

    // let usedColumns = Object.keys(this.rawdata[section][0]);
    // // this.data[section].map((row, index) => {
    // //   this.data[section][index] = _.pick(row, usedColumns);
    // //   return undefined;
    // // });
    // usedColumns.forEach(usedCol => {
    //   // const colname = usedCol.replace(" ", "-");
    //   const colname = usedCol;
    //   if (this.filters[`${section}-${colname}`]) {
    //     let colfilters = this.filters[`${section}-${colname}`];
    //     if (colfilters.length > 0) {
    //       this.data[section].forEach(row => {
    //         if (!colfilters.includes(row[colname].toLowerCase())) {
    //           if (this.data[section].indexOf(row) > -1) {
    //             pulls.push(this.data[section].indexOf(row));
    //           }
    //         }
    //       });
    //     }
    //   }
    // });
    // _.pullAt(this.data[section], pulls);
    // console.log(this.filteredData);
    // console.log(fdata);
    // return this.data;
    return fdata;
  }

  // @computed get filteredData() {
  //   const section = "networkMac";
  //   console.log("filtering data...");
  //   return computed(() => this.data).get();
  //   // return this.data;
  //   // let filteredData = [...this.data];
  //   let pulls = [];
  //   let usedColumns =Object.keys(this.rawdata[section][0]);
  //   // this.data[section].map((row, index) => {
  //   //   this.data[section][index] = _.pick(row, usedColumns);
  //   //   return undefined;
  //   // });
  //   usedColumns.forEach(usedCol => {
  //     // const colname = usedCol.replace(" ", "-");
  //     const colname = usedCol;
  //     if (this.filters[`${section}-${colname}`]) {
  //       let colfilters = this.filters[`${section}-${colname}`];
  //       if (colfilters.length > 0) {
  //         this.data[section].forEach(row => {
  //           if (!colfilters.includes(row[colname].toLowerCase())) {
  //             if (this.data[section].indexOf(row) > -1) {
  //               pulls.push(this.data[section].indexOf(row));
  //             }
  //           }
  //         });
  //       }
  //     }
  //   });
  //   _.pullAt(this.data[section], pulls);
  //   return this.data;
  // }

  @action loadtableData() {
    this.isLoading = true;
    // this.transportLayer.fetchTodos().then(fetchedTodos => {
    //   fetchedTodos.forEach(json => this.updateTodoFromServer(json));
    //   this.isLoading = false;
    // });
    // this.data = tableData[this.view];
    this.data = tableData2;
    // this.td = tableData2;
    this.isLoading = false;
    // return this.tableData;
  }
}
export default new DataBrowserStore();
