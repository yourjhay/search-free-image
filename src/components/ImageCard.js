import React from 'react'
import { HeartTwoTone } from '@ant-design/icons'
import { Typography, Avatar  } from 'antd'

const ImageCard = ({image}) => {
    const { Text } = Typography;

    return (
        <div className="col mt-2">
            <div className="card">
            <a rel="noreferrer" href={image.links.html} target="_blank">
                <img style={{maxHeight: '300px', objectFit: 'cover'}} alet={image.alt_description}  src={image.urls.small} className="card-img-top" alt="..."/>
            </a>
            <div className="card-body">   
                <div className="d">
                    <div className="d-flex justify-content-between">
                        <a rel="noreferrer" target="_blank" href={image.user.links.html}>
                        <div className="d-flex">
                            <Avatar size="small" src={image.user.profile_image.small} />
                            <Text className="px-1" type="secondary">@{image.user.username}</Text>
                        </div>
                        </a>
                        <div >
                            <a rel="noreferrer" href={image.links.download} target="_blank" download>Download</a>                              
                        </div>
                    </div>
                    <div >
                        <span className="d-flex align-items-center"><HeartTwoTone twoToneColor="#eb2f96" /><span className="pb-1 px-1">{image.likes}</span></span>
                    </div>                    
                </div>
                
                <p className="card-text mt-1">{image.description ?? image.alt_description}</p>
            </div>
            </div>
        </div>
    )
}

export default ImageCard
