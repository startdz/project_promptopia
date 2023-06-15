"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Profile from "@components/Profile"

const MyProfile = () => {

  const {data:session} = useSession()
  const router = useRouter()

  const [posts, setPosts] = useState([])

  const handleEdit = (post) => {
   router.push(`/update-prompt?id=${post._id}`) 
  }

  const handleDelete = async(post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this prompt ?")

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: 'DELETE'
        })

        const filteredPost = posts.filter((p) => {
          p._id !== post._id
        })

        setPosts(filteredPost)
      } catch (error) {
        
      }
    }
  }

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`)
      const data = await response.json()
      setPosts(data)
    }

    if(session?.user.id) fetchPost()
  }, [])

  return (
    <Profile
      name={"My"}
      desc="Welcome to personalize profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}
export default MyProfile