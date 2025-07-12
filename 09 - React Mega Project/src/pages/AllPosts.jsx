import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/config'

const AllPosts = () => {
    const [post, setPost] = useState(second)
    useEffect(() => {


        return () => {

        }
    }, [])

    appwriteService.getPosts([]).then(() => {
        if (posts) {
            setPost(posts.documents)
        }
    })

    return (
        <div>

        </div>
    )
}

export default AllPosts
