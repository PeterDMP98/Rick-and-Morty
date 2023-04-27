const Pagination = ({ characterPerPage, currentPage, setCurrentPage, totalCharacter }) => {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalCharacter / characterPerPage); i++) {
        pageNumber.push(i)
    }

    const onPreviusPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const onSpecificPage = n => {
        setCurrentPage(n)
    }

    return (
        <nav
            className="pagination is-centered mb-6"
            role="navigation"
            aria-label="pagination">

            <a onClick={onPreviusPage} className={`pagination-previous ${currentPage === 1 ? `is-disabled` : ``}`} >Previous</a>
            <a onClick={onNextPage} className={`pagination-next ${currentPage >= pageNumber.length ? `is-disabled` : ``}`} >Next page</a>

            <ul className="pagination-list">

                {
                    pageNumber.map(noPage => (
                        <li key={noPage}>
                            <a onClick={() => onSpecificPage(noPage)} className={`pagination-link ${noPage === currentPage ? `is-current` : ``}`}>{noPage}</a>
                        </li>
                    ))
                }

            </ul>
        </nav>
    )
}

export default Pagination