import React from 'react';
import { Table } from 'semantic-ui-react';

const TableElement = ({ data, headers, renderBodyRow }) => {
  let headerRow = headers || Object.keys(data.pop());

  const defaultRenderBodyRow = (data) => {
    let cells = [];
    headerRow.map((header) => {
      cells.push(data[header] || '');
    });
    return { cells };
  };

  return (
    <Table
      celled
      headerRow={headerRow}
      renderBodyRow={renderBodyRow || defaultRenderBodyRow}
      tableData={data}
    />
  );
};
export const tableMaker = ({ data, headers }) => {
  const headerRow = headers || Object.keys(data.pop());
  // const headers = Object.keys(data);
  const rows = (data) => {
    const cells = [];
    headerRow.map((header) => {
      cells.push(data[header] || '');
    });
    return { cells };
  };
  return <Table headerRow={headerRow} renderBodyRow={rows} tableData={data} />;
};
