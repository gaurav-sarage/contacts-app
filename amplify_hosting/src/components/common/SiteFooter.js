import Container from 'react-bootstrap/Container';

function SiteFooter() {
    return (
        <footer className="py-5 my-5">
            <Container className="px-4">
                <p className="text-end">
                    Icons created by <a href="https://www.flaticon.com/free-icons/people">Flaticon</a>.
                    <br />&copy; 2022 Cumulus Cycles&nbsp;&nbsp;
                </p>
            </Container>
        </footer>
    )
}

export default SiteFooter;