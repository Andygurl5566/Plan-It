

function EntryCard({entries}){
    return (
        <div className = "card" style={{ width: '25rem' }}>
        <div className = "card-body">
            <img class="card-img-top" src={entries.image} alt="Card image cap"/>

            <h5 className="card-title">{entries.title}</h5>
            {/* 🔴🟠🟡🟢🔵🟣🟤⚫⚪ */}

            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
            <a href="#" class="btn btn-primary">Details</a>
            <a href="/projects" class="btn btn-primary">Back</a>
        </div>
    </div>
    )
}

export default EntryCard