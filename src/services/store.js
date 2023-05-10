import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

/* configing a store, the store is a global state that stores the 
entire information of our application but in most cases I don't need
the entire state, only need reduce it to a specific slice of the pie.
In this case its going to be the articleApi, so I just want to get 
something from this API, to beable to make this work I added a reducer
and .concat(articleApi.middleware)

See url for documentation
https://redux-toolkit.js.org/api/configureStore
*/
export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware)
});