import { DataBrowserStore } from '../stores/DataBrowserStore';

describe('DataBrowserStore', () => {
  it('gets filtered data', () => {
    const store = new DataBrowserStore();
    expect(store.data.cmts.length).toBe(2);
    expect(store.data.cmts[0].name).toBe('cmts-1');
  });

  it('filters data', () => {
    const store = new DataBrowserStore();
    store.addFilter('foo', { name: 'cmts-name', value: 'cmts-1' });
    // console.log('the filters', store.filters);
    expect(store.filteredData.cmts.length).toBe(1);
  });
});
