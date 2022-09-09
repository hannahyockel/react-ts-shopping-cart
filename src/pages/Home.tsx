import { Container } from "react-bootstrap"

export function Home() {
    return (
        <Container className="d-flex flex-column p-5 align-items-center justify-content-center text-center">
            <h1>Online Store</h1>
            <p>Find the latest products. 
                <br />
                Shop the Online Store.</p>
        </Container>
    )
}