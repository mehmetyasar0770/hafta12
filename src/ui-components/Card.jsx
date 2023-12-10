export default ({children, secenekler, card_text, card_title, img_url})=>{
    
    if( secenekler === undefined ) {
        secenekler = {
            imgPos: "top"
        }
    }

    return (
        <>
        <div className="card">
            {
                secenekler?.imgPos === "top" &&
                    <img src={img_url} class="card-img-top" alt="..." />
            }

            <div className="card-body">
              <h5 className="card-title">{card_title}</h5>
              <p className="card-text">{card_text}</p>
            </div>

            <div className="card-body">
              {children}
            </div>

            {
                secenekler?.imgPos === "bottom" &&
                    <img src={img_url} class="card-img-bottom" alt="..." />
            }
          </div>
        </>
    )
}