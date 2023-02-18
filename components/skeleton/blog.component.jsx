import styles from "../../styles/skeleton.module.css";
import Shimmer from "./shimmer.component";
import SkeletonElement from "./skeleton_element.component";
const BlogError = () => {
  return (
    <article className={`${styles.blog_section} ${styles.skeleton_wrapper}`}>
      <div className={styles.blog_img_container}>
        <SkeletonElement type="img" />
      </div>
      <aside className={`${styles.blog_body} ${styles.skeleton_article}`}>
        <div>
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
        <div className={styles.blog_footer}>
          <SkeletonElement type="date" />
          <SkeletonElement type="date" />
        </div>
      </aside>

      <Shimmer />
    </article>
  );
};

export default BlogError;
