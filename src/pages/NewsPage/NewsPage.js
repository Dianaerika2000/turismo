import Card from '../../components/Card/Card';

export default function NewsPage() {
  let newsArray = [
    {
      img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/DB56/production/_126405165_15e8ea1200dc59972110e0c4be98078884f42bf8.jpg',
      text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      date: '2022-08-22 12:00',
    },
    {
      img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/DB56/production/_126405165_15e8ea1200dc59972110e0c4be98078884f42bf8.jpg',
      text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      date: '2022-08-22 12:00',
    },
    {
      img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/DB56/production/_126405165_15e8ea1200dc59972110e0c4be98078884f42bf8.jpg',
      text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      date: '2022-08-22 12:00',
    },
  ];

  return (
    <div className="container">
      <h1>News Page</h1>
      <div className="row mt-5">
          {newsArray.map((news, index) => {
            return (
                <div className='col-12 col-md-4 mb-3' key={index}>
                    <Card image={news.img} text={news.text} newsDate={news.date} ></Card>
                </div>
            );
          })}
      </div>
    </div>
  );
}
