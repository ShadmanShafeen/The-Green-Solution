import InfiniteScroll from 'react-infinite-scroll-component'
import styles from './ScrollBar.module.css'

function ScrollBar()
{ 
      return(
            <InfiniteScroll
                  dataLength={items.length}
                  next={fetchMoreData}
                  hasMore={true}
                  loader={<h4>Loading...</h4>}
            >
               {items.map((item, index) => (
                <div key={index}>{item}</div>
                   ))}
                </InfiniteScroll>

                )
}
export default ScrollBar
