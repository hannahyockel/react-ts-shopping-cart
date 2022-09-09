import { Card, Button, Badge } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartIcon } from "./CartIcon";
import { RemoveFromCartButton } from "./RemoveFromCartButton";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart();
  const quantity: number = getItemQuantity(id);
  return (
    <Card className="hover-card">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column shadow-sm">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2 fw-bold">{name}</span>
          <span className="ms-2 fw-light text-muted">
            {formatCurrency(price)}
          </span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              variant="outline-light text-dark"
              className="w-100"
              onClick={() => increaseCartQuantity(id)}
            >
              Add to cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "relative",
                  }}
                  variant="outline-light"
                  className="rounded-circle d-inline-flex justify-content-center align-items-center shadow-sm text-dark me-1"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>
                <CartIcon id={id} width="1.5rem" height="1.5rem" badgeWidth="1rem" badgeHeight="1rem" />
                <Button
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "relative",
                  }}
                  variant="outline-light"
                  className="rounded-circle d-inline-flex justify-content-center align-items-center shadow-sm text-dark ms-2"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
              </div>
              <RemoveFromCartButton id={id} />
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
