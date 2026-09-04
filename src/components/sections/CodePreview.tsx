import React from 'react';
import { profileData } from '../../data/portfolioData';

export const CodePreview: React.FC = () => {
  const { codeCard } = profileData;

  return (
    <div className="bg-surface-card border border-surface-border rounded-xl p-6 shadow-xl relative">
      {/* Window Controls & File Name */}
      <div className="flex items-center justify-between pb-4 border-b border-surface-border mb-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-slate-700" />
          <span className="w-3 h-3 rounded-full bg-slate-700" />
          <span className="w-3 h-3 rounded-full bg-slate-700" />
        </div>
        <span className="text-xs font-mono text-slate-500">
          {codeCard.fileName}
        </span>
      </div>

      {/* Formatted Code Block */}
      <pre className="font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto custom-scrollbar pb-2">
        <code>
          <span className="text-brand-400">const</span> engineer = {'{\n'}
          {'  '}name: <span className="text-emerald-300">"{codeCard.engineer.name}"</span>,{'\n'}
          {'  '}title: <span className="text-emerald-300">"{codeCard.engineer.title}"</span>,{'\n'}
          {'  '}focus: [{'\n'}
          {codeCard.engineer.focus.map((item, idx) => (
            <React.Fragment key={item}>
              {'    '}<span className="text-emerald-300">"{item}"</span>
              {idx < codeCard.engineer.focus.length - 1 ? ',' : ''}{'\n'}
            </React.Fragment>
          ))}
          {'  '}],{'\n'}
          {'  '}stack: {'{\n'}
          {'    '}frontend: [{codeCard.engineer.stack.frontend.map((item, idx) => (
            <React.Fragment key={item}>
              <span className="text-indigo-300">"{item}"</span>
              {idx < codeCard.engineer.stack.frontend.length - 1 ? ', ' : ''}
            </React.Fragment>
          ))}],{'\n'}
          {'    '}backend: [{codeCard.engineer.stack.backend.map((item, idx) => (
            <React.Fragment key={item}>
              <span className="text-indigo-300">"{item}"</span>
              {idx < codeCard.engineer.stack.backend.length - 1 ? ', ' : ''}
            </React.Fragment>
          ))}],{'\n'}
          {'    '}data: [{codeCard.engineer.stack.data.map((item, idx) => (
            <React.Fragment key={item}>
              <span className="text-indigo-300">"{item}"</span>
              {idx < codeCard.engineer.stack.data.length - 1 ? ', ' : ''}
            </React.Fragment>
          ))}],{'\n'}
          {'    '}cloud: [{codeCard.engineer.stack.cloud.map((item, idx) => (
            <React.Fragment key={item}>
              <span className="text-indigo-300">"{item}"</span>
              {idx < codeCard.engineer.stack.cloud.length - 1 ? ', ' : ''}
            </React.Fragment>
          ))}]{'\n'}
          {'  '}{'}'},{'\n'}
          {'  '}principles: <span className="text-amber-300">"{codeCard.engineer.principles}"</span>{'\n'}
          {'}'};
        </code>
      </pre>

      {/* Status Footer */}
      <div className="mt-4 pt-4 border-t border-surface-border flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
          {codeCard.testedNote}
        </span>
        <span className="font-mono text-slate-500">{codeCard.version}</span>
      </div>
    </div>
  );
};
