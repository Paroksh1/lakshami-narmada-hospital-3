import React from 'react';
import { Card } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Play, Phone } from 'lucide-react';

const KnowledgeHubPage = () => {
  // Featured Videos
  const featuredVideos = [
    {
      title: 'Stop Comparing Your Children',
      description:
        "Dr. Sanjeev Kumar discusses the negative impacts of comparing children and provides insights on how to appreciate each child's unique qualities. Learn strategies to foster self-esteem and healthy sibling relationships.",
      videoId: 'to1Z5QuYhVY',
      duration: '5:32',
      thumbnail: 'https://img.youtube.com/vi/to1Z5QuYhVY/maxresdefault.jpg',
      views: '24K',
      date: '2 months ago',
    },
    {
      title: 'How to Stop Bedwetting in Kids',
      description:
        'Dr. Sanjeev Kumar explains the causes of bedwetting in children and provides practical solutions and treatments to help parents manage this common childhood issue effectively.',
      videoId: 'eHAihnyphfQ',
      duration: '6:15',
      thumbnail: 'https://img.youtube.com/vi/eHAihnyphfQ/maxresdefault.jpg',
      views: '18K',
      date: '1 month ago',
    },
  ];

  // Latest Health Videos (left column list)
  const latestVideos = [
    {
      title: 'Stop Comparing Your Children',
      description:
        "Dr. Sanjeev Kumar discusses the negative impacts of comparing children and provides insights on how to appreciate each child's unique qualities.",
      videoId: 'to1Z5QuYhVY',
      duration: '5:32',
      thumbnail: 'https://img.youtube.com/vi/to1Z5QuYhVY/maxresdefault.jpg',
      views: '24K',
      date: '2 months ago',
      videoLink: 'https://youtu.be/to1Z5QuYhVY?si=5T4V-qidOlPuqiM6',
      videoTitle: 'Stop Comparing Your Children',
      category: 'Parenting Advice',
    },
    {
      title: 'How to Stop Bedwetting in Kids',
      description:
        'Causes, practical solutions, and treatments to help parents manage bedwetting effectively.',
      videoId: 'eHAihnyphfQ',
      duration: '6:15',
      thumbnail: 'https://img.youtube.com/vi/eHAihnyphfQ/maxresdefault.jpg',
      views: '18K',
      date: '1 month ago',
      videoLink: 'https://youtu.be/eHAihnyphfQ?si=UV2rEoTzRs8_YHx2',
      videoTitle: 'How to Stop Bedwetting in Kids',
      category: 'Child Health',
    },
  ];

  // Right Column Videos
  const rightColumnVideos = [
    {
      title: 'How to Handle Fever in Kids',
      description:
        "When to worry about fever and safe home-care techniques. Learn proper temperature monitoring and when to seek medical attention.",
      videoLink: 'https://youtu.be/XpIQ6AgU_Dg?si=nO8lMHviuHNLnq7j',
      videoTitle: 'Fever Management in Children',
      thumbnail: 'https://img.youtube.com/vi/XpIQ6AgU_Dg/maxresdefault.jpg',
      duration: '8:12',
      views: '35K',
      date: '2 weeks ago',
      category: 'Child Health',
    },
    {
      title: 'How to Handle Picky Eaters',
      description:
        'Practical strategies to encourage healthy eating and ensure proper nutrition for your growing child.',
      videoLink: 'https://youtu.be/xmvTu9J-q0w?si=IllD32cVcl4Lk1qn',
      videoTitle: 'Managing Picky Eaters',
      thumbnail: 'https://img.youtube.com/vi/xmvTu9J-q0w/maxresdefault.jpg',
      duration: '6:45',
      views: '29K',
      date: '3 weeks ago',
      category: 'Nutrition',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
          {/* Breadcrumb */}
          <nav className="flex mb-2 sm:mb-3" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 sm:space-x-2">
              <li className="inline-flex items-center">
                <a
                  href="/"
                  className="inline-flex items-center text-xs sm:text-sm text-blue-100 hover:text-white"
                >
                  <svg
                    className="w-3 h-3 mr-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L4 11.414V18a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </a>
              </li>
              <li aria-current="page">
                <span className="ml-1 text-xs sm:text-sm text-blue-100/80">Knowledge Hub</span>
              </li>
            </ol>
          </nav>

          <h1
            className="font-bold tracking-tight"
            style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.25rem)' }}
          >
            Knowledge Hub
          </h1>
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* LEFT: Featured + Latest */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Featured Videos */}
            <Card className="p-4 sm:p-6">
              <h2
                className="font-bold text-gray-800 mb-4 sm:mb-6"
                style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)' }}
              >
                Featured Videos
              </h2>

              <div className="space-y-4">
                {featuredVideos.map((video) => (
                  <article
                    key={video.videoId}
                    className="rounded-lg overflow-hidden border hover:shadow-md transition-shadow"
                  >
                    {/* Mobile: vertical card with aspect-video.
                        Desktop: split layout */}
                    <div className="flex flex-col md:flex-row">
                      {/* Media */}
                      <a
                        href={`https://www.youtube.com/watch?v=${video.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block md:w-2/5 relative"
                        aria-label={video.title}
                      >
                        <div className="w-full aspect-video md:aspect-[16/10] bg-gray-100 relative">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                          />
                          <button
                            aria-label="Play video"
                            className="absolute inset-0 m-auto w-12 h-12 sm:w-14 sm:h-14 grid place-items-center rounded-full bg-red-600 text-white shadow-md hover:bg-red-700 transition-colors"
                          >
                            <Play className="w-5 h-5" />
                          </button>
                          <span className="absolute bottom-2 right-2 rounded bg-black/70 text-white text-[10px] px-1.5 py-0.5">
                            {video.duration}
                          </span>
                        </div>
                      </a>

                      {/* Content */}
                      <div className="p-4 md:p-5 md:w-3/5">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5">
                          <a
                            href={`https://www.youtube.com/watch?v=${video.videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600"
                          >
                            {video.title}
                          </a>
                        </h3>
                        <p className="text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-3">
                          {video.description}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>{video.views} views</span>
                          <span>•</span>
                          <span>{video.date}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </Card>

            {/* Latest Health Videos */}
            <Card className="p-4 sm:p-6">
              <h2
                className="font-bold text-gray-800 mb-4 sm:mb-6"
                style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)' }}
              >
                Latest Health Videos
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {latestVideos.map((v) => (
                  <article
                    key={v.videoId}
                    className="border-b border-gray-200 pb-4 sm:pb-6 last:border-0 last:pb-0"
                  >
                    <div className="flex gap-3 sm:gap-4">
                      {/* Thumb */}
                      <a
                        href={v.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-32 sm:w-44 flex-shrink-0"
                        aria-label={v.videoTitle}
                      >
                        <div className="relative w-full aspect-video rounded-md overflow-hidden bg-gray-100">
                          <img
                            src={v.thumbnail}
                            alt={v.videoTitle}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                          />
                          <button
                            aria-label="Play video"
                            className="absolute inset-0 m-auto w-9 h-9 grid place-items-center rounded-full bg-red-600 text-white shadow hover:bg-red-700 transition-colors"
                          >
                            <Play className="w-4 h-4" />
                          </button>
                          <span className="absolute bottom-1 right-1 rounded bg-black/70 text-white text-[10px] px-1">
                            {v.duration}
                          </span>
                        </div>
                      </a>

                      {/* Meta */}
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                          <a
                            href={v.videoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600"
                          >
                            {v.title}
                          </a>
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-1.5">
                          {v.description}
                        </p>
                        <div className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-500">
                          <span>{v.views} views</span>
                          <span>•</span>
                          <span>{v.date}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </Card>
          </div>

          {/* RIGHT: Latest (sticky on desktop, stacked on mobile) */}
          <aside className="lg:col-span-1">
            <h2
              className="font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-6"
              style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)' }}
            >
              Latest Videos
            </h2>

            <div className="space-y-4 lg:space-y-6">
              {rightColumnVideos.map((rv, i) => (
                <a
                  key={i}
                  href={rv.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Card className="p-3 sm:p-4 hover:shadow-md transition-shadow">
                    <div className="relative rounded-md overflow-hidden bg-gray-100 aspect-video mb-2.5">
                      <img
                        src={rv.thumbnail}
                        alt={rv.videoTitle}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                      <button
                        aria-label="Play video"
                        className="absolute inset-0 m-auto w-9 h-9 grid place-items-center rounded-full bg-red-600 text-white shadow group-hover:bg-red-700 transition-colors"
                      >
                        <Play className="w-4 h-4" />
                      </button>
                      <span className="absolute bottom-2 right-2 rounded bg-black/70 text-white text-[10px] px-1">
                        {rv.duration}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                      {rv.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2 mb-1.5">
                      {rv.description}
                    </p>
                    <div className="flex items-center gap-2 text-[11px] text-gray-500">
                      <span>{rv.views} views</span>
                      <span>•</span>
                      <span>{rv.date}</span>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>

      {/* EMERGENCY BANNER */}
      <div className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold">Medical Emergency?</h3>
              <p className="text-sm/6 opacity-90">24/7 Emergency Services Available</p>
            </div>
            <a
              href="tel:+918586860125"
              className="inline-flex items-center gap-2 rounded-lg bg-white/15 hover:bg-white/25 transition-colors px-4 py-2"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/25">
                <Phone className="h-4 w-4" />
              </span>
              <span className="text-sm">
                <span className="opacity-90 block -mb-0.5">Emergency Hotline</span>
                <span className="text-base sm:text-lg font-bold">+91 85868 60125</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHubPage;
