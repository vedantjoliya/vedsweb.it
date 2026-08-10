import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Lock, X, Plus, Trash2, Edit3, Key, RefreshCw, LogOut, Save } from 'lucide-react';

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
    resetData
  } = usePortfolio();

  const [passwordInput, setPasswordInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [activeTab, setActiveTab] = useState('add');
  const [editingId, setEditingId] = useState(null);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Framer Web Application');
  const [description, setDescription] = useState('');
  const [demoUrl, setDemoUrl] = useState('');
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
    setYear(proj.year || '2026');
    setActiveTab('add');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Admin Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-3">
            <img
              src="/logo-full.png"
              alt="VW STUDIO Logo"
              className="h-8 w-auto object-contain"
            />
            <div className="text-left">
              <h3 className="font-display font-bold text-lg text-slate-900">VedsWeb Secret Admin Panel</h3>
              <p className="text-xs text-slate-500 font-medium">Manage live Framer websites & portfolio data</p>
            </div>
          </div>

          <button
            onClick={() => setIsAdminOpen(false)}
            className="p-2 rounded-xl bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Passcode Login Screen */}
        {!isAdminLoggedIn ? (
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto border border-indigo-100 shadow-sm">
              <Key className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-xl font-bold font-display text-slate-900">Secret Passcode Required</h4>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Enter your secret key to manage VedsWeb live projects.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                placeholder="Enter secret key..."
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
              />

              {errorMsg && (
                <div className="text-xs font-mono text-rose-600 bg-rose-50 p-3 rounded-xl border border-rose-200 font-medium">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-md transition-all"
              >
                UNLOCK ADMIN PANEL
              </button>
            </form>
          </div>
        ) : (
          /* Dashboard */
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4 font-sans text-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { setActiveTab('add'); resetForm(); }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold border transition-colors ${
                    activeTab === 'add' ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  <Plus className="w-4 h-4" />
                  <span>{editingId ? 'Edit Project' : 'Add New Project'}</span>
                </button>

                <button
                  onClick={() => setActiveTab('manage')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold border transition-colors ${
                    activeTab === 'manage' ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  <Edit3 className="w-4 h-4" />
                  <span>Manage Projects ({projects.length})</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const code = `const INITIAL_PROJECTS = ${JSON.stringify(projects, null, 2)};`;
                    navigator.clipboard.writeText(code);
                    alert('INITIAL_PROJECTS array copied to clipboard! You can paste this directly into PortfolioContext.jsx to update the server codebase for all devices worldwide.');
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Copy Codebase Array</span>
                </button>

                <button
                  onClick={resetData}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 font-semibold"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset Data</span>
                </button>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 font-semibold"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>

            {/* Form */}
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

            {/* Manage List */}
            {activeTab === 'manage' && (
              <div className="space-y-3 text-left">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200"
                  >
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{proj.title}</h4>
                      <p className="text-xs text-slate-600 font-normal line-clamp-1">{proj.description}</p>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">{proj.demoUrl}</p>
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

          </div>
        )}

      </div>
    </div>
  );
};
