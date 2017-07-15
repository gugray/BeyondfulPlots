import React from 'react'
import { PluginRegistry } from '../sdk/PluginRegistry.js'
import { TheKnife } from './Knife'
import { TheFork } from './Fork'

window.PluginRegistry.registerText("Duh");
window.PluginRegistry.registerComp(TheKnife);
window.PluginRegistry.registerComp(TheFork);
