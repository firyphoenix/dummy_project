import React from 'react'

export default function mainpage() {
    return (
        <div>
            <div className="container carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div class="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" className="d-block w-100"/>

                    </div>
                    <div className="carousel-item active" >
                        <img className="d-block w-100" src ="https://thumbs.dreamstime.com/b/scenic-nature-landscape-path-near-lake-forest-path-tunnel-trees-near-lake-scenic-nature-autumn-landscape-panorama-view-115358410.jpg"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://images-na.ssl-images-amazon.com/images/I/81A%2BqqYaYFL._SX450_.jpg"/>
                    </div>

                </div>


            </div>
            
        </div>
    )
}
