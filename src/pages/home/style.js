import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    .banner-img{
        width: 625px;
        height: 270px;
    }
`;
export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
    
`;

export const TopicItem = styled.div`
    float: left;
    height: 32 px;
    line-height: 32 px;
    margin-left: 18px;
    margin-bottom: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }  
`;
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        font-size: 18px;
        line-height: 27px;
        font-weight:bold;
        color: #333
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        font-weight:bold;
        color: #999
    }
    
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px; 
`;

export const RecommendItem = styled.div`
    width: 280px; 
    height: 50px;
    background: url(${(props)=> props.imgUrl});
    background-size: contain;
`;
export const WriterWrapper = styled.div`
    width: 278px; 
    height: 300px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    line-height: 300px;
    text-aglign: center;
`;