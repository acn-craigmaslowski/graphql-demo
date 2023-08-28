import {UserScalarsFragment} from "@graphql-demo/graphql-schema";
import {
  UserInteractionItem,
  UserInteractionListItem,
} from "../user-interaction-list-item";
import {sortByLastModifiedDate} from "../../etc";

export function UserInteractionList({
  items,
  user,
}: {
  items: UserInteractionItem[];
  user: UserScalarsFragment;
}) {
  return (
    <>
      {items.sort(sortByLastModifiedDate).map(item => {
        return (
          <UserInteractionListItem item={item} key={item.id} user={user} />
        );
      })}
    </>
  );
}
