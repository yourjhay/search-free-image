import React, { useEffect, useState } from 'react'
import { useHistory  } from 'react-router-dom'
import { Input, Button, Alert, Layout} from 'antd'
import { getImages } from '../utils/API'
import { ImageCard } from '../components'
import { v4 as uuidv4 } from 'uuid';
import { CameraOutlined } from '@ant-design/icons'

const SearchImage = (props) => {
    const history               = useHistory()
    const { Search }            = Input
    const { Header, Content } = Layout
    const [loading, setLoading] = useState(false)
    const [images, setImages]   = useState([])
    const [query, setQuery]     = useState('')
    const [page, setPage]       = useState(1)
    const [total, setTotal]     = useState(1)
    const [interact, setInteract] = useState(false)

    useEffect(() => {
       
    }, )

    useEffect(() => {
       //eslint-disable-next-line react-hooks/exhaustive-deps
       if(interact){
        getImagesData() 
       }
    }, [page, query])

    const getImagesData = async () => {
        if(query !== '' || query !== null) {
            setLoading(true)
            await getImages(query, page)
            .then((res) => {   
                console.log(res)             
                setImages([...images, ...res.results])
                setTotal(res.total_pages)
            }).catch((err) => {
                console.log(err)
            })
        }
         setLoading(false);
    }

    const onSearchSubmit = async (q) => {       
        setQuery(q)       
    }

    const loadMore = () => {
        setPage(page + 1)                 
    }

    return (
       <Layout>
           <Header  style={{ position: 'fixed', zIndex: 99, width: '100%' }}><span className="text-white d-flex align-items-center"><CameraOutlined style={{paddingRight: 5}} /> Free Images</span></Header>
            <Content className="site-layout" style={{ padding: '5px', marginTop: 64 }}>
            <div className="col-md-5 col mb-3 mt-2">
                <Search onChange={()=>setInteract(true)} onSearch={(e)=>{ setImages([]); history.push('/'); onSearchSubmit(e)}} placeholder="Search free images.." enterButton="Search" size="large" loading={loading} />
            </div>
            
            <div className="p-3" style={{minHeight: '80vh'}}>
                
               { total === 0 &&
                    <div className="m-2">
                       <Alert
                        message="NO IMAGES FOUND. PLEASE TRY ANOTHER QUERY."
                        banner
                        closable
                        />
                    </div>
               } 
                <div className="row mt-3 row-cols-1 row-cols-md-3 g-4">
                    {
                        images.map((image, index)=>(
                            <ImageCard key={uuidv4()} image={image}/>
                        ))
                    }
                </div>
                {
                page < total && images.length > 1 &&
                    <div className="mt-2 mx-auto p-4">
                    <center>
                    <Button type="primary" loading={loading} onClick={() => {setLoading(true); loadMore()}}>
                        LOAD MORE
                    </Button>
                    </center>
                    </div>
                }
            </div>
            </Content>    
       </Layout>
    )
}

export default SearchImage
