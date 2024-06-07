import React,{useState} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Addvideos() {
  const navigate = useNavigate()
  const [data, setdata] = useState({
    topic: '',
    description: '',
    VideoUrl: '',
    ThumbUrl: '',
  });
  const addnew = async (e) => {
    e.preventDefault();
    const {topic , description , VideoUrl , ThumbUrl } = data;
    try{
      const {data} = await axios.post('/Addvideos', {
        topic , description , VideoUrl , ThumbUrl
      });
      if(data.error)
      {
        toast.error(data.error)
      }
      else{
        setdata({});
        toast.success('added successfully');
        navigate('/Dashboard');
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ flex: 1, marginTop: '150px', backgroundColor: 'skyblue', paddingTop: 70, paddingBottom: 70, paddingLeft: 40, paddingRight: 40, borderRadius: 20 }}>
      <form onSubmit={addnew}>
        <label>Topic</label>
        <input type='text' placeholder = 'enter topic...' value={data.topic} onChange={(e) => setdata({...data, topic: e.target.value})} />
        <label>Description</label>
        <input type='text' placeholder = 'enter description...' value={data.description} onChange={(e) => setdata({...data, description: e.target.value})}/>
        <label>Video Url</label>
        <input type='text' placeholder = 'enter video Ulr...' value={data.VideoUrlideoUrl} onChange={(e) => setdata({...data, VideoUrl: e.target.value})} />
        <label>Thumbnail Url</label>
        <input type='text' placeholder = 'enter thumb Ulr...' value={data.ThumbUrl} onChange={(e) => setdata({...data, ThumbUrl: e.target.value})} />
        <button type='submit'>submit</button>
      </form>
    </div>
    </div>
    </div>
  );
}
