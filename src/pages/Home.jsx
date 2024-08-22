import React from 'react';
import Sidebar from '../components/Sidebar';
import Video from '../components/Video';
import { useAuth } from '../context/AuthProvider';
import ListItems from '../components/ListItems';

const Home = () => {
  const { loading, data } = useAuth();

  console.log(data);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(data?.contents)) {
    return <div>Error: Data format is incorrect or no data found.</div>;
  }

  return (
    <div className="flex mt-16">
      <Sidebar />
      <div className="h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-hidden">
        <ListItems />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading && data.contents.map((item) => {
            if (item.type !== "video") return null;
            return <Video key={item.id} video={item.video} />
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
