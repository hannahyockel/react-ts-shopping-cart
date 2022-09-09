import { Card, Button, Badge } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

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
    removeFromCart,
  } = useShoppingCart();
  const quantity: number = getItemQuantity(id);
  return (
    <Card>
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
            <Button variant="outline-light text-dark" className="w-100" onClick={() => increaseCartQuantity(id)}>
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
                <div
                  className="d-flex flex-row align-items-center justify-content-center"
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "relative",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 2"
                    viewBox="0 0 35 35"
                  >
                    <path d="M27.47,23.93H14.92A5.09,5.09,0,0,1,10,20L8,11.87a5.11,5.11,0,0,1,5-6.32h16.5a5.11,5.11,0,0,1,5,6.32l-2,8.15A5.1,5.1,0,0,1,27.47,23.93ZM12.94,8.05a2.62,2.62,0,0,0-2.54,3.23l2,8.15a2.6,2.6,0,0,0,2.54,2H27.47a2.6,2.6,0,0,0,2.54-2l2-8.15a2.61,2.61,0,0,0-2.54-3.23Z" />
                    <path d="M9.46 14a1.25 1.25 0 0 1-1.21-1L6.46 5.23A3.21 3.21 0 0 0 3.32 2.75H1.69a1.25 1.25 0 0 1 0-2.5H3.32A5.71 5.71 0 0 1 8.9 4.66l1.78 7.77a1.24 1.24 0 0 1-.93 1.5A1.43 1.43 0 0 1 9.46 14zM15.11 34.75a4 4 0 1 1 4-4A4 4 0 0 1 15.11 34.75zm0-5.54a1.52 1.52 0 1 0 1.52 1.52A1.52 1.52 0 0 0 15.11 29.21zM28.93 34.75a4 4 0 1 1 4-4A4 4 0 0 1 28.93 34.75zm0-5.54a1.52 1.52 0 1 0 1.53 1.52A1.52 1.52 0 0 0 28.93 29.21z" />
                    <path d="M28.93,29.21H12.27a3.89,3.89,0,1,1,0-7.78h2.65a1.25,1.25,0,1,1,0,2.5H12.27a1.39,1.39,0,1,0,0,2.78H28.93a1.25,1.25,0,0,1,0,2.5Z" />
                  </svg>
                  <Badge
                    bg="dark"
                    className="rounded-circle d-flex justify-content-center align-items-center"
                    style={{
                      color: "white",
                      width: "1rem",
                      height: "1rem",
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      transform: "translate(60%, -80%)",
                    }}
                  >
                    {quantity}
                  </Badge>
                </div>
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
              <div
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  position: "relative",
                }}
                className="d-inline-flex justify-content-center align-items-center hover"
                onClick={() => removeFromCart(id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
