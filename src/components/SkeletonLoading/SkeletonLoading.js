import React from "react";
import "../CardMovie/CardMovie.css";
import Skeleton from "react-loading-skeleton";

const SkeletonLoading = (props) => {
    const { totalSkeleton } = props;

    return (
        // totalSkeleton.map((i) => (
            <div className="card-movie">
                <div>
                    <div className="card-movie--title">
                        <div>
                            <Skeleton height={50} width={200}/>
                        </div>
                        <Skeleton height={50} width={50}/>
                    </div>
                    <Skeleton height={20} width={350}/>
                    <Skeleton height={20} width={350}/>
                    <Skeleton height={20} width={350}/>
                    <Skeleton height={20} width={350}/>
                    <Skeleton height={20} width={350}/>
                    <Skeleton height={20} width={350}/>
                    <Skeleton height={20} width={350}/>
                </div>
                <Skeleton height={30} width={100}/>
            </div>
        // ))
    ); 
};

export default SkeletonLoading;
