
const ItemPreview = ({ id }) => {

  return (
    <div>H</div>
  )

}

export default ItemPreview;

export async function getServerSideProps(context) {
  console.log(context.query)
  return { props: { id: 1 } }
}
//export async function getStaticProps(context) {
//  return {id: 1}
//}
//export async function getStaticPaths() {
//
//  return {
//    paths: [
//      { params: { id: "SUP" } },
//      { params: { id: "Kayak" } },
//      { params: { id: "Pedal" } },
//      { params: { id: "Fiesta" } },
//    ],
//    fallback: false,
//  };
//}
