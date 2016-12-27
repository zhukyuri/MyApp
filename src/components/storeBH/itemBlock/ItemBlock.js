/**
 * Project sample and testing components
 * Created by Yuriy Zhuk on 19.11.16.
 */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ItemBlock.css';

class ItemBlock extends React.Component {

  render() {
    return (
      <div className={s.itemContainer + ' ' + s.b}> {/*  style={height: 417}  */}

        {/*  Image zone  */}
        <div className={s.imageZone}>
          <a className={s.itemImg}
             href="https://www.bhphotovideo.com/c/product/1188763-REG/samsung_sm_r322nzwaxar_gear_vr_2015_edition.html">
            <img src="https://static.bhphoto.com/images/images250x250/1444850593000_1188763.jpg"
                 className={s.image}
                 alt="Samsung Gear VR 2015 Edition Virtual Reality Headset "/>
          </a>
        </div>

        {/*  review-stars zone  */}
        <div className={s.reviewStarsZone} > {/*  style={height: 36}  */}
            <a href="https://www.bhphotovideo.com/c/product/1188763-REG/samsung_sm_r322nzwaxar_gear_vr_2015_edition.html#customerReview"
              className={s.listDetailStars}> {/*review-stars-medium ten c2*/}
                <span className={s.reviewStars}>
                  <svg className={s.reviewStarsGrey +' '+s.reviewStarsSvg}>
                      <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#stars" />
                  </svg>
                  <span className={s.reviewStarsInner} style={{width: '70%'}}>
                    <svg className={s.reviewStarsGreen +' '+s.reviewStarsSvg}>
                      <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#stars" />
                    </svg>
                  </span>
                  </span>
              (52)
            </a>
        </div>



        {/*  Name zone  */}
        <h3 className={s.nameProductBlock}>
          <a className={s.nameProduct}
            href="https://www.bhphotovideo.com/c/product/1188763-REG/samsung_sm_r322nzwaxar_gear_vr_2015_edition.html"
            title="Samsung Gear VR 2015 Edition Virtual Reality Headset ">
            <span itemProp="brand">Samsung</span>
            <span itemProp="name">Gear VR 2015 Edition Virtual Reality Headset </span>
          </a>
        </h3>


        {/*  Info zone  */}
        <div className={s.infoBlock}>
        </div>


        <div className={'img-zone ' + s.grow01}>
          <div className="js-similarItemCont" style={{height: 0}}>
          </div>
        </div>

        <div className={s.priceBlock}>
          <div className="price-zone ">

            <div className="prices js-prices" style={{height: 0}}></div>


            <div className="js-atc-price" style={{height: 20}}>
              <p className={s.priceYouPay}>
                <span className={s.youpay}>Ваша цена: </span>
                <span className={s.price}>$59.99</span>
              </p>
            </div>


            <div className="atc-zone clearfix" data-selenium="addToCartZone">
              <div className="js-acMapMessageCont" data-selenium="MapMessageCont" style={{height: 0}}>
              </div>


              <form className="clearfix submitToOnePopup atcForm"
                    action="https://www.bhphotovideo.com/bnh/controller/home?O=productlist.jsp&A=cart&Q=add"
                    method="post" data-modal="{&quot;overlayStyle&quot;:{&quot;opacity&quot;:0.7}}">
                <button type="submit" data-selenium="submitBtn"
                        className="addToCart right blueBtn cursor-pointer atc-btn fs11 bold one-line">Add to Cart
                </button>
                <a href="https://www.bhphotovideo.com/find/cart.jsp" data-selenium="inCartBtn"
                   className="right inCart inc-btn  drkGrayBtn fs11 bold ">View Cart</a>
              </form>


                <div className={s.wishlistDropdown+' '+s.cursorPointer}>


                  <div className={s.jsToggleWishlistList}>

                    <div>
											<span className={s.itemNotInAnyList} style={{display: 'none'}}>Add to Wish List</span>
                      <span className={s.itemInSomeList}>
                        <svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#check"></use></svg>
                        Item in Wish List</span>
                    </div>

                    <div className={s.dropdownArrow}>
                      <svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#arrow-down-light"></use></svg>
                    </div>
                  </div>


                  <div className={s.wishlistList}>
                    <div className={s.wishlistListWrapper}>

                      <a href="https://www.bhphotovideo.com/find/wishlist.jsp/#A3759EE627/"
                        className={s.wishlistLink+' '+s.noUnderline+' '+s.itemInList}>Default</a>

                      <a href="https://www.bhphotovideo.com/find/wishlist.jsp/#A37626B3C7/"
                        className={s.wishlistLink+' '+s.noUnderline}>sssssssssssssssss</a>

                    </div>

                    <div className={s.addNewWishlist}>Create new</div>
                  </div>


                </div>




            </div>

          </div>
        </div>




        <div className={'img-zone ' + s.grow01}>
          {/* Sales Comments */}
          <div className="clearfix js-stockInfo" data-selenium="stockInfo" style={{height: 17}}>
            <div className="salesComments scAvailability_scShipTime clearfix " data-selenium="salesComments">
              <p className="scAvailability fs11" data-selenium="CommentAvailability">
                <span className="upper c5 bold  left inStock underline-on-hover cursor-pointer js-popover-opener"
                      data-container="body" data-animation="false"
                      data-popover-content-container="#scShipTime_1188763-REG" data-class="salesCommentsPopover"
                      data-selenium="popoverContent" data-original-title title>In Stock</span>
              </p>
              <p id="scShipTime_1188763-REG" className="scShipTime c9 fs11" data-selenium="ShipTime"
                 style={{display: 'none'}}>
                <span className="c2 fs11" data-selenium="shipTimeInfo">
                </span>
                <span className="js-popoverContent" data-selenium="ShipPop" style={{display: 'none'}}>
                  <span className="c2 fs11">
                    Place your order by 4PM Mon, Nov 21 and your order will ship the same day. For further details see delivery estimates in cart. International orders are processed the next shipping day.
                  </span>
                </span>
              </p>
            </div>
            <span className="right" data-selenium="usaGreyLink">
            </span>
          </div>
          <div className="shippingLinkCont js-shippingLinkCont clearfix" data-selenium="shippingLinkCont"
               style={{height: 19}}>
            <div className="salesComments scShipNote sect clearfix c2 bold" data-selenium="salesComments">
              <a className="openInNewOnePopupLayer pShipCalc"
                 href="https://www.bhphotovideo.com/bnh/controller/home?O=productlist.jsp&A=estimateShip&Q=&sku=1188763&is=REG"
                 data-selenium="ShipCalc" rel="noLayerCache"><span className="pShipCalcLink c2 underline bold">Calculate Shipping</span></a>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default withStyles(s)(ItemBlock);
