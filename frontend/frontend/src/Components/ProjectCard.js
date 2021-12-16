

function ProjectCard({project}){
    return(
        <div className = "card" style={{ width: '25rem' }}>
            <div className = "card-body">
                <img class="card-img-top" src={project.image} alt="Card image cap"/>

                <h5 className="card-title">{project.title}</h5>
                {/* 🔴🟠🟡🟢🔵🟣🟤⚫⚪ */}

                <p class="card-text">{project.details}</p>
                
                <a href="/entries" class="btn btn-primary">View Entries</a>
            </div>
        </div>
    )
}


export default ProjectCard