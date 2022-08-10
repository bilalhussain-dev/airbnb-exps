import React from 'react'
import newImgOne from '../images/news-img-1.png'

function ListExperiences() {
  return (
    <section className="list-experiences">
        <h3>Plan a trip with help from local Hosts around the world</h3>
        <div className="exp-list">
            <div className="card-exp">
                <img src={newImgOne} alt="" className="news-img" />
                <div className="rating-count">
                    <div className="rating">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <span>5.0</span>
                    </div>
                    <span className='text-cnt'>United States</span>
                </div>
                
            </div>
            <div className="card-exp">
                <img src={newImgOne} alt="" className="news-img" />
                <div className="rating-count">
                    <div className="rating">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <span>5.0</span>
                    </div>
                    <span className='text-cnt'>United States</span>
                </div>
                
            </div>
            <div className="card-exp">
                <img src={newImgOne} alt="" className="news-img" />
                <div className="rating-count">
                    <div className="rating">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <span>5.0</span>
                    </div>
                    <span className='text-cnt'>United States</span>
                </div>
                
            </div>
            <div className="card-exp">
                <img src={newImgOne} alt="" className="news-img" />
                <div className="rating-count">
                    <div className="rating">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <span>5.0</span>
                    </div>
                    <span className='text-cnt'>United States</span>
                </div>
                
            </div>
            <div className="card-exp">
                <img src={newImgOne} alt="" className="news-img" />
                <div className="rating-count">
                    <div className="rating">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <span>5.0</span>
                    </div>
                    <span className='text-cnt'>United States</span>
                </div>
                
            </div>
            <div className="card-exp">
                <img src={newImgOne} alt="" className="news-img" />
                <div className="rating-count">
                    <div className="rating">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <span>5.0</span>
                    </div>
                    <span className='text-cnt'>United States</span>
                </div>
                
            </div>
            
        </div>
    </section>
  )
}

export default ListExperiences