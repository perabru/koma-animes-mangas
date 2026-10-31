"""Gera 6 s de barras de teste com FFmpeg; não baixa vídeos."""
import subprocess,shutil
from pathlib import Path
out=Path(__file__).parent/'hls_demo';out.mkdir(exist_ok=True)
if not shutil.which('ffmpeg'):raise SystemExit('Instale FFmpeg pela fonte oficial indicada na trilha.')
cmd=['ffmpeg','-hide_banner','-loglevel','error','-y','-f','lavfi','-i','testsrc2=size=320x180:rate=24','-t','6','-an','-c:v','libx264','-pix_fmt','yuv420p','-g','48','-sc_threshold','0','-hls_time','2','-hls_playlist_type','vod','-hls_segment_filename',str(out/'segmento_%03d.ts'),str(out/'index.m3u8')]
subprocess.run(cmd,check=True)
assert (out/'index.m3u8').exists() and list(out.glob('*.ts'))
print('Playlist e segmentos sintéticos em',out)
