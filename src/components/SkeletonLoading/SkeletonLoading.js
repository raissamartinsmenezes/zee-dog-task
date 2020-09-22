import React from "react";
import Skeleton from "react-loading-skeleton";
import greyHeart from "../../../assets/grey-heart.svg";

const SkeletonLoading = (props) => {
    return (
            <div className="card-movie">
                <div>
                    <div className="card-movie--title">
                        <div>
                            <Skeleton height={50} width={150}/>
                        </div>
                        <img src={greyHeart} className="favorite-button"/>
                    </div>
                    <div className="movie-description">
                        <Skeleton height={20} width={200}/>
                        <Skeleton height={20} width={200}/>
                        <Skeleton height={20} width={200}/>
                        <Skeleton height={20} width={200}/>
                        <Skeleton height={20} width={200}/>
                        <Skeleton height={20} width={200}/>
                        <Skeleton height={20} width={200}/>
                    </div>
                </div>
                <Skeleton height={30} width={100}/>
            </div>
    ); 
};

export default SkeletonLoading;
