import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

describe('v2.0.0 release metadata', () => {
  it('uses the release version in package metadata', () => {
    const pkg = JSON.parse(readFileSync('package.json', 'utf8')) as { version: string }
    expect(pkg.version).toBe('2.0.0')
  })

  it('keeps the bilingual v2.0.0 milestone release scope, five-asset contract, and platform limitations in the READMEs', () => {
    const chineseReadme = readFileSync('README.md', 'utf8')
    const englishReadme = readFileSync('README_en.md', 'utf8')

    expect(chineseReadme).toContain('v2.0.0')
    expect(chineseReadme).toContain('重要里程碑版本')
    expect(chineseReadme).toContain('本地优先')
    expect(chineseReadme).toContain('编排层')
    expect(chineseReadme).toContain('不内置任何本地或云端模型依赖')
    expect(chineseReadme).toContain('五项资产')
    expect(chineseReadme).toContain('ai-novel-writer-setup-2.0.0.exe')
    expect(chineseReadme).toContain('ai-novel-writer-setup-2.0.0.exe.blockmap')
    expect(chineseReadme).toContain('latest.yml')
    expect(chineseReadme).toContain('ai-novel-writer-mac-arm64-2.0.0-installer.dmg')
    expect(chineseReadme).toContain('ai-novel-writer-mac-arm64-2.0.0-installer.dmg.sha256')
    expect(chineseReadme).toContain('Windows x64')
    expect(chineseReadme).toContain('Windows 安装包未签名')
    expect(chineseReadme).toContain('应用内更新')
    expect(chineseReadme).toContain('未签名、未公证')
    expect(chineseReadme).toContain('macOS ARM64')
    expect(chineseReadme).toContain('手动更新')

    expect(englishReadme).toContain('v2.0.0')
    expect(englishReadme).toContain('major milestone release')
    expect(englishReadme).toContain('local-first')
    expect(englishReadme).toContain('orchestration layer')
    expect(englishReadme).toContain('no built-in local or cloud model dependency')
    expect(englishReadme).toContain('five assets')
    expect(englishReadme).toContain('ai-novel-writer-setup-2.0.0.exe')
    expect(englishReadme).toContain('ai-novel-writer-setup-2.0.0.exe.blockmap')
    expect(englishReadme).toContain('latest.yml')
    expect(englishReadme).toContain('ai-novel-writer-mac-arm64-2.0.0-installer.dmg')
    expect(englishReadme).toContain('ai-novel-writer-mac-arm64-2.0.0-installer.dmg.sha256')
    expect(englishReadme).toContain('Windows x64')
    expect(englishReadme).toContain('Windows installer is not code-signed')
    expect(englishReadme).toContain('in-app update')
    expect(englishReadme).toContain('unsigned and not notarized')
    expect(englishReadme).toContain('macOS ARM64')
    expect(englishReadme).toContain('manual update')
  })

  it('keeps stale Mythpen branding out of release metadata', () => {
    const releaseConfig = readFileSync('package.json', 'utf8')
    expect(releaseConfig.toLowerCase()).not.toContain('mythpen')
  })

  it('lets the Windows smoke command discover the current release executable', () => {
    const smokeScript = readFileSync('scripts/smoke-win-app.ps1', 'utf8')
    expect(smokeScript).toContain('package.json')
    expect(smokeScript).toContain('AI小说作家.exe')
  })
})
