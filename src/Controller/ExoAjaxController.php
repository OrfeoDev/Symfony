<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ExoAjaxController extends AbstractController
{
    #[Route('/exoajax', name: 'exo_ajax')]
    public function index(): Response
    {
        return $this->render('exo_ajax/index.html.twig', [
            'controller_name' => 'ExoAjaxController',
        ]);
    }
}
