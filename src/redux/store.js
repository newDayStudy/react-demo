import { configureStore } from '@reduxjs/toolkit';
import tabs from './modules/tabs-store'
export default configureStore({
    reducer: {
        tabs: tabs
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        //关闭序列化状态检测中间件
            serializableCheck: false
        }
    ),
});
