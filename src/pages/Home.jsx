import Layout from '../components/Layout';
import HomeContent from '../components/HomeContent';

const Home = () => {
  return (
    <Layout>
      <div className="p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white h-full overflow-auto">
        <HomeContent />
      </div>
    </Layout>
  );
};

export default Home;
