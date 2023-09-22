import { createSlice } from '@reduxjs/toolkit';

export const tabs = createSlice({
    name: 'tabs',
    initialState: {
        tabs: [{label: '首页', key: '/home', closable: false}],
        curTabsKey: ''
    },
    reducers: {
        add: (state, {payload}) => {
           const tabData = state.tabs.find(item => item.key == payload.key)
            if (!tabData) {
                state.tabs.push(payload)
            }
            state.curTabsKey = tabData? tabData.key : payload.key
        },
        remove: (state, {payload}) => {
            const index = state.tabs.findIndex(item => item.key == payload.key)
            state.tabs = state.tabs.filter(item => item.key != payload.key)
            if (index > 1) {
                state.curTabsKey = state.tabs[index - 2].key
            } else {
                state.curTabsKey = state.tabs[index - 1].key
            }
            payload.router(state.curTabsKey)
        }
    },
});

// 为每个 case reducer 函数生成 Action creators
export const { add, remove } = tabs.actions;

export default tabs.reducer;
