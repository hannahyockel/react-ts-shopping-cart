import { Container, Row, Col } from "react-bootstrap"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"

export function Store() {
    return (
        <>
          <h1>Shop the Moonline</h1>
          <p className="fw-light text-muted">{storeItems.length} products</p>
          <Row md={2} xs={1} lg={3} className="g-3">
            {storeItems.map(item => (
                // StoreItem takes all item properties as props
                <Col key={item.id}><StoreItem {...item} /></Col>
            ))}
          </Row>
        </>
    )
}