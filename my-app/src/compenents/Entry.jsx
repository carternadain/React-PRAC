function Entry() {
    return(
        <article className= "journal entry">
            <div className="entry-header">
                <img src="https://via.placeholder.com/150" alt="Entry Thumbnail" className="entry-thumbnail" />
                </div>
            <div className="entry-content">
                <img src="https://via.placeholder.com/150" alt="Entry Image" className="entry-image" />
                </div>
                <span className="entry-title">Japan
                    <a href="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9">View on Google Maps 
                        </a>
                        <h2 className="entry-name">Mount Fuji</h2>
                        <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular
                         tourist site in Japan, for both Japanese and foreign tourists. </p>
                </span>
        </article>
    )
}   

export default Entry;