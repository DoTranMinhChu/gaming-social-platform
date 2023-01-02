import LayoutDefault from "layouts/LayoutDefault";

const Home = ({ metaTag }: any) => {
  const meta = metaTag?.filter((item: any) => item.type === 'general') || [{
    title: 'title',
    description: 'description',
    author: 'author',
    keywords: 'keywords'
  }];

  return (
    <LayoutDefault
      title={meta[0]?.title}
      description={meta[0]?.description}
      author={meta[0]?.author}
      keywords={meta[0]?.keywords}
      isShowNavbar={true}
      isShowFooter={true}
    >
      <h1>Hello</h1>
    </LayoutDefault>
  );
};

export async function getServerSideProps({ locale }: any) {

  return {
    props: {
    },
  };
}

export default Home;
