import {
    Container
} from "react-bootstrap";

function SiteFooter() {
    return (
        <footer className="py-5 my-5">
            <Container className="px-4">
                <p className="text-end">
                    &copy; 2023
                </p>
            </Container>
        </footer>
    )
}

export default SiteFooter;