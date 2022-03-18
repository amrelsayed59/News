import * as moment from 'moment';



const List: React.FC<any> = ({item, index}) => {
  const vodafoneLink = 'https://www.vodafone.com'
    
  const Tags = item.tags.map((tag: any, index: number) => (
      <li key={index}>
          <div>{tag}</div>
      </li>
  ));


  return (
      <>
          <div className={`new-item ${index === 0? 'item-lg':''}`}>
            <div className="img-box">
              <img src={vodafoneLink + item.thumbnailImage} alt="news" className="img-fluid" />
            </div>
            <div className="new-content shadow">
                <div className="category-box">
                    <div> <span>{moment.default(item.createdTime * 1000).format("D-MMM-YYYY")}</span> | <span>{item.category}</span></div>
                    <div>
                    <i className="fa fa-share-alt text-danger fa-lg" aria-hidden="true"></i>
                    </div>
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <ul className="list-unstyled tags">
                  {Tags}
                </ul>
            </div>
          </div>
      </>
  );
}

export default List;