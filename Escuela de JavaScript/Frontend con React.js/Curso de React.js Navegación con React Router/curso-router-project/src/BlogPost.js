import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogdata } from './blogdata'
import { useAuth } from './auth'

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate()


  const auth = useAuth()
  const blogpost = blogdata.find(post => post.slug === slug);

  const returnToBlog = () => {
    navigate('/blog')
  }
  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>


      {auth.user?.isAsmin && (
        <button>Eliminar blogpost</button>
      )}
    </>
  );
}

export { BlogPost };
