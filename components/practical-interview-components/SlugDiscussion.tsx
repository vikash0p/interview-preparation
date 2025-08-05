'use client';
import React, { useState } from 'react';
import {
  FaUserCircle,
  FaRegThumbsUp,
  FaThumbsUp,
  FaRegComment,
  FaReply,
  FaEllipsisH,
  FaEdit,
  FaTrash,
  FaRegPaperPlane,
} from 'react-icons/fa';
import { MdOutlineSort, MdSortByAlpha } from 'react-icons/md';

export const SlugDiscussion = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: 'Alex Johnson',
      avatar: null,
      role: 'Frontend Developer',
      timestamp: '2 hours ago',
      content:
        'This solution helped me understand controlled forms better! The validation part was particularly insightful.',
      likes: 8,
      liked: false,
      replies: [
        {
          id: 11,
          user: 'Sarah Miller',
          avatar: null,
          role: 'React Specialist',
          timestamp: '1 hour ago',
          content: 'Glad it helped! For more advanced validation, you might want to look into react-hook-form.',
          likes: 3,
          liked: false,
        },
      ],
    },
    {
      id: 2,
      user: 'Michael Chen',
      avatar: null,
      role: 'Fullstack Engineer',
      timestamp: '5 hours ago',
      content: "Has anyone tried implementing this with TypeScript? I'm having trouble with the form state types.",
      likes: 4,
      liked: true,
      replies: [],
    },
  ]);

  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'popular'>('recent');
  const [editingComment, setEditingComment] = useState<number | null>(null);
  const [editContent, setEditContent] = useState('');

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const newCommentObj = {
      id: Date.now(),
      user: 'You',
      avatar: null,
      role: 'Commenter',
      timestamp: 'Just now',
      content: newComment,
      likes: 0,
      liked: false,
      replies: [],
    };

    setComments([...comments, newCommentObj]);
    setNewComment('');
  };

  const handleAddReply = (commentId: number) => {
    if (!replyContent.trim()) return;

    setComments(
      comments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: Date.now(),
                user: 'You',
                avatar: null,
                role: 'Commenter',
                timestamp: 'Just now',
                content: replyContent,
                likes: 0,
                liked: false,
              },
            ],
          };
        }
        return comment;
      })
    );

    setReplyContent('');
    setReplyingTo(null);
  };

  const toggleLike = (commentId: number, isReply = false, parentId?: number) => {
    if (isReply && parentId !== undefined) {
      setComments(
        comments.map(comment => {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: comment.replies.map(reply => {
                if (reply.id === commentId) {
                  return {
                    ...reply,
                    liked: !reply.liked,
                    likes: reply.liked ? reply.likes - 1 : reply.likes + 1,
                  };
                }
                return reply;
              }),
            };
          }
          return comment;
        })
      );
    } else {
      setComments(
        comments.map(comment => {
          if (comment.id === commentId) {
            return {
              ...comment,
              liked: !comment.liked,
              likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
            };
          }
          return comment;
        })
      );
    }
  };

  const startEdit = (commentId: number, content: string) => {
    setEditingComment(commentId);
    setEditContent(content);
  };

  const saveEdit = (commentId: number) => {
    setComments(
      comments.map(comment => {
        if (comment.id === commentId) {
          return { ...comment, content: editContent };
        }
        return comment;
      })
    );
    setEditingComment(null);
    setEditContent('');
  };

  const deleteComment = (commentId: number) => {
    setComments(comments.filter(comment => comment.id !== commentId));
  };

  return (
    <div className="bg-gray-900 text-gray-100 p-6 rounded-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Discussion ({comments.length})</h2>

        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm">Sort by:</span>
          <div className="flex gap-1">
            <button
              onClick={() => setSortBy('recent')}
              className={`px-3 py-1 rounded-md flex items-center gap-1 text-sm ${
                sortBy === 'recent' ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <MdOutlineSort />
              Recent
            </button>
            <button
              onClick={() => setSortBy('popular')}
              className={`px-3 py-1 rounded-md flex items-center gap-1 text-sm ${
                sortBy === 'popular' ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <MdSortByAlpha />
              Popular
            </button>
          </div>
        </div>
      </div>

      {/* New Comment Form */}
      <div className="mb-8 bg-gray-800/50 p-4 rounded-md border border-gray-700">
        <div className="flex gap-3 mb-3">
          <div className="bg-gray-700 border-2 border-dashed rounded-md w-16 h-16 flex items-center justify-center">
            <FaUserCircle className="text-3xl text-gray-500" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium">Add a comment</h3>
            <p className="text-sm text-gray-400">Share your thoughts about this solution</p>
          </div>
        </div>

        <textarea
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
          placeholder="What are your thoughts?"
          className="w-full bg-gray-800 border border-gray-700 rounded-md p-4 text-gray-200 mb-3 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <div className="flex justify-end">
          <button
            onClick={handleAddComment}
            disabled={!newComment.trim()}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-md flex items-center gap-2"
          >
            <FaRegPaperPlane />
            Post Comment
          </button>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map(comment => (
          <div key={comment.id} className="bg-gray-800/30 rounded-md border border-gray-700 p-4">
            {/* Comment Header */}
            <div className="flex gap-3 mb-3">
              <div className="bg-gray-700 border-2 border-dashed rounded-md w-12 h-12 flex items-center justify-center">
                <FaUserCircle className="text-xl text-gray-500" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{comment.user}</h3>
                    <p className="text-xs text-gray-400">{comment.role}</p>
                  </div>
                  <div className="text-xs text-gray-400">{comment.timestamp}</div>
                </div>
              </div>
            </div>

            {/* Comment Content */}
            {editingComment === comment.id ? (
              <div className="mb-3">
                <textarea
                  value={editContent}
                  onChange={e => setEditContent(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-gray-200 mb-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => saveEdit(comment.id)}
                    className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded-md"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingComment(null)}
                    className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <p className="mb-3 text-gray-300">{comment.content}</p>
            )}

            {/* Comment Actions */}
            <div className="flex justify-between">
              <div className="flex gap-4">
                <button
                  onClick={() => toggleLike(comment.id)}
                  className="flex items-center gap-1 text-sm text-gray-400 hover:text-indigo-400"
                >
                  {comment.liked ? <FaThumbsUp className="text-indigo-400" /> : <FaRegThumbsUp />}
                  <span>{comment.likes}</span>
                </button>

                <button
                  onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                  className="flex items-center gap-1 text-sm text-gray-400 hover:text-indigo-400"
                >
                  <FaReply />
                  <span>Reply</span>
                </button>
              </div>

              <div className="relative group">
                <button className="text-gray-400 hover:text-gray-200 p-1">
                  <FaEllipsisH />
                </button>
                <div className="absolute right-0 mt-1 w-40 bg-gray-800 border border-gray-700 rounded-md shadow-lg py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-10">
                  <button
                    onClick={() => startEdit(comment.id, comment.content)}
                    className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-700 text-sm"
                  >
                    <FaEdit className="text-blue-400" />
                    Edit
                  </button>
                  <button
                    onClick={() => deleteComment(comment.id)}
                    className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-700 text-sm"
                  >
                    <FaTrash className="text-red-400" />
                    Delete
                  </button>
                </div>
              </div>
            </div>

            {/* Reply Form */}
            {replyingTo === comment.id && (
              <div className="mt-4 pl-4 border-l-2 border-gray-700">
                <textarea
                  value={replyContent}
                  onChange={e => setReplyContent(e.target.value)}
                  placeholder={`Replying to ${comment.user}...`}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-gray-200 mb-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddReply(comment.id)}
                    disabled={!replyContent.trim()}
                    className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-md text-sm"
                  >
                    Post Reply
                  </button>
                  <button
                    onClick={() => setReplyingTo(null)}
                    className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Replies */}
            {comment.replies.length > 0 && (
              <div className="mt-4 pl-4 border-l-2 border-gray-700 space-y-4">
                {comment.replies.map(reply => (
                  <div key={reply.id} className="pt-4">
                    <div className="flex gap-3 mb-2">
                      <div className="bg-gray-700 border-2 border-dashed rounded-md w-10 h-10 flex items-center justify-center">
                        <FaUserCircle className="text-lg text-gray-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium text-sm">{reply.user}</h3>
                            <p className="text-xs text-gray-400">{reply.role}</p>
                          </div>
                          <div className="text-xs text-gray-400">{reply.timestamp}</div>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-300 mb-2">{reply.content}</p>

                    <button
                      onClick={() => toggleLike(reply.id, true, comment.id)}
                      className="flex items-center gap-1 text-xs text-gray-400 hover:text-indigo-400"
                    >
                      {reply.liked ? (
                        <FaThumbsUp className="text-indigo-400 text-xs" />
                      ) : (
                        <FaRegThumbsUp className="text-xs" />
                      )}
                      <span>{reply.likes}</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Empty State */}
      {comments.length === 0 && (
        <div className="text-center py-12">
          <div className="bg-gray-800/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaRegComment className="text-3xl text-gray-500" />
          </div>
          <h3 className="text-xl font-medium mb-2">No comments yet</h3>
          <p className="text-gray-400 mb-4">Be the first to share your thoughts!</p>
        </div>
      )}
    </div>
  );
};
