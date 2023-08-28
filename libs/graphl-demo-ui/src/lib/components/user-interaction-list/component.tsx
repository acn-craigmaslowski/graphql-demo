import {UserScalarsFragment} from "@graphql-demo/graphql-schema";
import {
  UserInteractionItem,
  UserInteractionListItem,
} from "../user-interaction-list-item";

export function UserInteractionList({
  items,
  user,
}: {
  items: UserInteractionItem[];
  user: UserScalarsFragment;
}) {
  return (
    <>
      {items.map(item => {
        return (
          <UserInteractionListItem item={item} key={item.id} user={user} />
        );
      })}
    </>
  );
}
