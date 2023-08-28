import {FetchResult, InternalRefetchQueriesInclude} from "@apollo/client";

export type RefetchQueries<T> =
  | InternalRefetchQueriesInclude
  | ((result: FetchResult<T>) => InternalRefetchQueriesInclude);
