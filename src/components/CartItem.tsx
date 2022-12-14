import { Stack } from "react-bootstrap";
import StoreItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import { RemoveFromCartButton } from "./RemoveFromCartButton";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const item = StoreItems.find((i) => i.id === id);

  if (item == null) {
    return null;
  }
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        className="rounded shadow-sm"
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.85rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <RemoveFromCartButton id={id} />
    </Stack>
  );
}
