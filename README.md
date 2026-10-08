# Backend — next milestone

Planned Python/FastAPI service:

POST /api/v1/studies
POST /api/v1/studies/{study_id}/images
POST /api/v1/analyses
GET /api/v1/analyses/{analysis_id}
GET /api/v1/studies/{study_id}/report

Model adapter:
analyze(image) -> findings, heatmaps, quality, model_version, research_only

The frontend deliberately uses simulated output until the real backend is connected.
