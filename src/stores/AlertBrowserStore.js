import _ from 'lodash';
import { action } from 'mobx';
import alertsData from '../data/alertsData.json';
import { extendObservable } from 'mobx';

export class AlertBrowserStore {
  constructor() {
    extendObservable(this, {
      direction: null,
      sortColumn: null,
      // @observable section = null;
      rawdata: [],
      data: alertsData,
      filters: {},
      isLoading: true,

      sort: action(function (clickedColumn) {
        if (this.sortColumn !== clickedColumn) {
          this.sortColumn = clickedColumn;
          this.direction = 'ascending';
          // this.data = _.sortBy(this.data, [clickedColumn], ["asc"]);
          this.data = _.sortBy(this.data, [clickedColumn]);
        } else {
          this.data = this.data.reverse();
          this.direction = this.direction === 'ascending'
            ? 'decending'
            : 'ascending';
        }
      }),

      addFilter: action.bound(function (evt, filter) {
        this.fetchData();
        // console.log('adding filter', filter.name);
        // const section = filter.name.substring(0, filter.name.indexOf('-'));
        this.filters[filter.name] = filter.value;
      }),

      get usedColumns() {
        return Object.keys(this.filteredData);
      },

      get sections() {
        return Object.keys(this.filteredData);
      },

      get options() {
        let fieldOptions = {};
        const sections = Object.keys(this.filteredData);
        for (let section of sections) {
          fieldOptions[section] = {};
          let fieldNames = Object.keys(this.filteredData[section][0]);
          for (let field of fieldNames) {
            fieldOptions[section][field] = [];
          }

          this.filteredData[section].forEach((row) => {
            for (let field of Object.keys(row)) {
              if (field !== 'parents') {
                let value = String(row[field]);
                // let foo = toJS(row);
                fieldOptions[section][field].push({
                  key: value.toLowerCase(),
                  text: value,
                  value: value.toLowerCase(),
                });
              }
            }
          });
        }
        return fieldOptions;
      },

      get filteredData() {
        // console.log('filtering data...');
        let fdata = { ...this.data };
        fdata = JSON.parse(JSON.stringify(fdata));
        const sections = Object.keys(fdata);

        if (Object.keys(this.filters).length === 0) {
          return fdata;
        }

        sections.forEach((section) => {
          let pulls = [];
          // console.log(section);
          if (fdata[section].length > 0) {
            const usedColumns = Object.keys(fdata[section][0]);
            usedColumns.forEach((usedCol) => {
              const colname = usedCol;
              if (this.filters[`${section}-${colname}`]) {
                let colfilters = this.filters[`${section}-${colname}`];
                if (colfilters.length > 0) {
                  fdata[section].forEach((row) => {
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

        sections.forEach((section) => {
          let pulls = [];
          fdata[section].forEach((row) => {
            if (row.parents) {
              row.parents.forEach((parentKey) => {
                let parentSection = parentKey.substring(
                  0,
                  parentKey.indexOf('-'),
                );
                let parentValue = parentKey.substring(
                  parentKey.indexOf('-') + 1,
                );
                let parentNames = [];
                try {
                  fdata[parentSection].forEach((row) => {
                    parentNames.push(row.name);
                  });
                  if (!parentNames.includes(parentValue)) {
                    pulls.push(fdata[section].indexOf(row));
                  }
                } catch (e) {
                  console.log('oops', e);
                }
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
        return fdata;
      },

      fetchData: action(function (view) {
        this.isLoading = true;
        // this.transportLayer.fetchTodos().then(fetchedTodos => {
        //   fetchedTodos.forEach(json => this.updateTodoFromServer(json));
        //   this.isLoading = false;
        // });
        // this.data = tableData[this.view];
        this.data = alertsData;
        // this.td = tableData2;
        this.isLoading = false;
        // return this.tableData;
      }),
    });
  }
}
export default new AlertBrowserStore();
