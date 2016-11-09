/**
 * Created by Jeffrey on 10/24/2016.
 */


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { add_article, add_comment } from '../../actions'


export const Articles = ({articles, add_comment}) => {

    const _comments = (c) => {

        return (
            <div>
                <p>
                    <h5>{c.author} COMMENTS: </h5>
                    <h6>{c.text}</h6>
                </p>
            </div>
        )
    }


    const _articles = (x) => {
        let comment;
        return (
            <div>
                <p>
                    <h2>{x.author} : </h2>
                    <h3>{x.text}</h3>
                    <img src={x.img} />
                    <div>
                        {x.comments.map(c => _comments(c))}
                    </div>
                    <input placeholder="Comment on this..." type="text" ref={(node) => comment=node} />
                    <button onClick={() => add_comment(x._id, {text:comment.value, commentId:-1})}>Comment</button>
                </p>

            </div>
        )
    }


    return (
        <div>
            {articles.map(x => _articles(x))}
        </div>
    )
}


export const Cards = ({articles, add_article, add_comment}) => {
    let status;
    return (
        <div>
            <input placeholder="Say something..." type="text" ref={(node) => status=node} />
            <button onClick={() => add_article({text:status.value})}>Add Article</button>
            <Articles articles={articles} add_comment={add_comment} />
        </div>
    )
}



export default connect(
    (state) => {
        return {
            articles : state.articles.articles,
        }
    },
    (dispatch) => {
        return {
            add_article : (payload) => dispatch(add_article(payload)),
            add_comment : (id, payload) => dispatch(add_comment(id, payload))

        }
    }
)(Cards)





