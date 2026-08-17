import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Lock, X, Plus, Trash2, Edit3, Key, RefreshCw, LogOut, Save, Users, Eye, MousePointerClick, Inbox, Mail, MapPin, Calendar, DollarSign } from 'lucide-react';

export const AdminModal = () => {
  const {
    isAdminOpen,
    setIsAdminOpen,
    isAdminLoggedIn,
    setIsAdminLoggedIn,
    projects,
    addProject,
    editProject,
    deleteProject,
    resetData,
    isCloudSyncing,
    inquiries,
    stats,
    deleteInquiry,
    clearInquiries
  } = usePortfolio();

  const [passwordInput, setPasswordInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [activeTab, setActiveTab] = useState('inquiries');
  const [editingId, setEditingId] = useState(null);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Framer Web Application');
  const [description, setDescription] = useState('');
  const [demoUrl, setDemoUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [year, setYear] = useState('2026');

  if (!isAdminOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === 'Joliya@283') {
      setIsAdminLoggedIn(true);
      setErrorMsg('');
      setPasswordInput('');
    } else {
      setErrorMsg('Invalid secret key. Access denied.');
    }
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
  };

  const resetForm = () => {
    setTitle('');
    setCategory('Framer Web Application');
    setDescription('');
    setDemoUrl('');
    setImageUrl('');
    setYear('2026');
    setEditingId(null);
  };

  const handleSubmitProject = (e) => {
    e.preventDefault();
    if (!title || !demoUrl) return;

    const projectData = {
      title,
      category: category || 'Framer Web Application',
      description,
      demoUrl,
      imageUrl,
      year: year || '2026'
    };

    if (editingId) {
      editProject(editingId, projectData);
    } else {
      addProject(projectData);
    }

    resetForm();
    setActiveTab('manage');
  };

  const startEdit = (proj) => {
    setEditingId(proj.id);
    setTitle(proj.title);
    setCategory(proj.category || 'Framer Web Application');
    setDescription(proj.description || '');
    setDemoUrl(proj.demoUrl || '');
    setImageUrl(proj.imageUrl || '');
    setYear(proj.year || '2026');
    setActiveTab('add');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn gpu-accelerated">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
        
        {/* Admin Header */}
        <div className="flex items-center justify-between gap-2 px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-100 bg-slate-50 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <img
              src="/logo-full.png"
              alt="VW STUDIO Logo"
              className="h-6 sm:h-8 w-auto object-contain shrink-0"
            />
            <div className="text-left min-w-0">
              <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                <h3 className="font-display font-bold text-sm sm:text-lg text-slate-900 truncate">VedsWeb Control Center</h3>
                {isCloudSyncing ? (
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider animate-pulse shrink-0">
                    Syncing Cloud...
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Cloud Live
                  </span>
                )}
              </div>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium truncate hidden sm:block">Real-time visitor analytics, client leads & live projects</p>
            </div>
          </div>

          <button
            onClick={() => setIsAdminOpen(false)}
            className="p-1.5 sm:p-2 rounded-xl bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors shrink-0"
            aria-label="Close admin modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Passcode Login Screen */}
        {!isAdminLoggedIn ? (
          <div className="p-6 sm:p-12 text-center max-w-md mx-auto space-y-6 my-auto">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto border border-indigo-100 shadow-sm">
              <Key className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-bold font-display text-slate-900">Secret Passcode Required</h4>
              <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
                Enter secret key to unlock VedsWeb analytics & lead dashboard.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                placeholder="Enter secret key..."
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono text-xs sm:text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
              />

              {errorMsg && (
                <div className="text-xs font-mono text-rose-600 bg-rose-50 p-3 rounded-xl border border-rose-200 font-medium">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-semibold text-xs shadow-md transition-all uppercase tracking-wider"
              >
                UNLOCK CONTROL CENTER
              </button>
            </form>
          </div>
        ) : (
          /* Dashboard Content */
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 sm:space-y-6">
            
            {/* Live Analytics Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
              
              <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100/80">
                <div className="flex items-center justify-between text-emerald-700 mb-1">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider font-sans">Active Visitors</span>
                  <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-xl sm:text-2xl font-bold font-display text-emerald-900 flex items-center gap-2">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{stats?.activeVisitors ?? 1} Browsing</span>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100/80">
                <div className="flex items-center justify-between text-indigo-700 mb-1">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider font-sans">Website Views</span>
                  <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-xl sm:text-2xl font-bold font-display text-indigo-900">
                  {stats?.pageViews ?? 0}
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/60 border border-amber-100/80">
                <div className="flex items-center justify-between text-amber-700 mb-1">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider font-sans">Contact Clicks</span>
                  <MousePointerClick className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-xl sm:text-2xl font-bold font-display text-amber-900">
                  {stats?.contactClicks ?? 0}
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-rose-50/60 border border-rose-100/80">
                <div className="flex items-center justify-between text-rose-700 mb-1">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider font-sans">Client Leads</span>
                  <Inbox className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-xl sm:text-2xl font-bold font-display text-rose-900">
                  {inquiries.length} Inquiries
                </div>
              </div>

            </div>

            {/* Navigation Bar — scrollable tab strip on mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-slate-100 pb-4 font-sans text-xs">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                <button
                  onClick={() => setActiveTab('inquiries')}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-semibold border transition-colors whitespace-nowrap text-xs ${
                    activeTab === 'inquiries' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  <Inbox className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Client Leads ({inquiries.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('manage')}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-semibold border transition-colors whitespace-nowrap text-xs ${
                    activeTab === 'manage' ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  <Edit3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Manage ({projects.length})</span>
                </button>

                <button
                  onClick={() => { setActiveTab('add'); resetForm(); }}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-semibold border transition-colors whitespace-nowrap text-xs ${
                    activeTab === 'add' ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{editingId ? 'Edit Project' : 'Add Project'}</span>
                </button>
              </div>

              <div className="flex items-center justify-end gap-2 shrink-0">
                <button
                  onClick={() => {
                    const code = `const INITIAL_PROJECTS = ${JSON.stringify(projects, null, 2)};`;
                    navigator.clipboard.writeText(code);
                    alert('INITIAL_PROJECTS array copied to clipboard!');
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 sm:py-2.5 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold text-[11px] sm:text-xs"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">Copy Codebase Array</span>
                  <span className="xs:hidden">Copy Array</span>
                </button>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 px-3 py-2 sm:py-2.5 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 font-semibold text-[11px] sm:text-xs"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>

            {/* TAB 1: CLIENT INQUIRIES LEADS TABLE */}
            {activeTab === 'inquiries' && (
              <div className="space-y-4 text-left font-sans">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <span>Recent Proposal Inquiries</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-normal">
                      Saved to Cloud DB before email dispatch
                    </span>
                  </h4>

                  {inquiries.length > 0 && (
                    <button
                      onClick={clearInquiries}
                      className="text-xs text-rose-600 hover:text-rose-700 font-medium hover:underline"
                    >
                      Clear All Leads
                    </button>
                  )}
                </div>

                {inquiries.length === 0 ? (
                  <div className="p-12 text-center bg-slate-50 border border-dashed border-slate-200 rounded-2xl">
                    <Inbox className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                    <p className="text-sm font-semibold text-slate-700">No client inquiries received yet</p>
                    <p className="text-xs text-slate-500 mt-1">When visitors submit project briefs on the Contact page, their data appears here live.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {inquiries.map((inq) => (
                      <div
                        key={inq.id}
                        className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 transition-colors text-left space-y-4"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200/60 pb-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <h5 className="font-bold text-base text-slate-900">{inq.name}</h5>
                              <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-bold">
                                {inq.projectType}
                              </span>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-1">
                              <a href={`mailto:${inq.email}`} className="flex items-center gap-1 text-indigo-600 hover:underline font-semibold">
                                <Mail className="w-3.5 h-3.5" />
                                <span>{inq.email}</span>
                              </a>
                              <span className="flex items-center gap-1 text-slate-600">
                                <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Budget: {inq.budget}</span>
                              </span>
                              <span className="flex items-center gap-1 text-slate-500">
                                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                                <span>{inq.country || 'Italy'}</span>
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {inq.date}
                            </span>
                            <button
                              onClick={() => deleteInquiry(inq.id)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                              title="Delete inquiry"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Brief text box */}
                        <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 text-xs text-slate-800 leading-relaxed font-mono whitespace-pre-wrap">
                          {inq.message}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: MANAGE PROJECTS */}
            {activeTab === 'manage' && (
              <div className="space-y-3 text-left">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200"
                  >
                    <div className="flex items-center gap-3 text-left">
                      {proj.imageUrl && (
                        <img
                          src={proj.imageUrl}
                          alt={proj.title}
                          className="w-12 h-12 rounded-lg object-cover border border-slate-200"
                          loading="lazy"
                          decoding="async"
                        />
                      )}
                      <div>
                        <h4 className="font-bold text-sm text-slate-900">{proj.title}</h4>
                        <p className="text-xs text-slate-600 font-normal line-clamp-1">{proj.description}</p>
                        <p className="text-xs text-slate-400 font-mono mt-0.5">{proj.demoUrl}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => startEdit(proj)}
                        className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
                        title="Edit project"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => deleteProject(proj.id)}
                        className="p-2 rounded-xl bg-rose-600 text-white hover:bg-rose-700 transition-colors"
                        title="Delete project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 3: ADD PROJECT FORM */}
            {activeTab === 'add' && (
              <form onSubmit={handleSubmitProject} className="space-y-4 text-left text-xs font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1 uppercase">Project Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shettys By Vedz"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:border-indigo-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1 uppercase">Category / Tagline</label>
                    <input
                      type="text"
                      placeholder="e.g. Luxury Dining & Culinary UI/UX"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:border-indigo-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1 uppercase">Project Description</label>
                  <textarea
                    rows={3}
                    placeholder="Enter project summary and key highlights..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:border-indigo-500 focus:bg-white resize-none"
                  />
                </div>

                <div className="mb-4">
                  <label className="block font-semibold text-slate-700 mb-1 uppercase">Project Image URL (Screenshot / Banner)</label>
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/photo-... or custom uploaded url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:border-indigo-500 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1 uppercase">Live Framer URL</label>
                    <input
                      type="url"
                      required
                      placeholder="https://shettysbyvedz.framer.website/"
                      value={demoUrl}
                      onChange={(e) => setDemoUrl(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:border-indigo-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1 uppercase">Year</label>
                    <input
                      type="text"
                      placeholder="2026"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:border-indigo-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-end gap-3">
                  {editingId && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-semibold"
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md"
                  >
                    <Save className="w-4 h-4" />
                    <span>{editingId ? 'Save Changes' : 'Publish Project'}</span>
                  </button>
                </div>

              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
