import 'bootstrap/dist/css/bootstrap.css'

const ArticleMain = (props) => {
  const { children, date, skills, title, details, place, placeDetails } = props
  return <article className="my-4">
    {!!place && <h3 className="fs-1 p-3 bg-success">{place}<i> {placeDetails}</i></h3>}
    <div class="row pt-3">
      <h4 className="fs-3 my-auto text-start col-8">{title}</h4>
      <h4 className="fs-3 my-auto text-end col-4 date">{date}</h4>
    </div>
    <hr />
    <div className="px-3">
      {!!skills && <p class="fs-5 skills"><b>Compétences principales :</b> {skills}</p>}
      <p className="fs-5">{children}</p>
      {!!details && <p className="fs-5"><i>{details}</i></p>}
    </div>
  </article>
}

export default ArticleMain